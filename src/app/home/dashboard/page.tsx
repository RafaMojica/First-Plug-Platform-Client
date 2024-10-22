"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { EmptyDashboardCard, PageLayout, ShopIcon } from "@/common";
import { Card, StockCard, TeamHomeCard } from "@/components";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { UserServices } from "@/services/user.services";
import { setAuthInterceptor } from "@/config/axios.config";
import { CATALOGO_FIRST_PLUG } from "@/config/constanst";
import { useSession } from "next-auth/react";
import { ComputerUpdateCard } from "@/components/Dashboard/ComputerUpdateCard";
import ComputerAgeChart from "@/components/Dashboard/ComputerAgeChart";
import { getBarColor } from "@/components/Dashboard/GetBarColor";
import { AuthServices } from "@/services";

export default observer(function Dashboard() {
  const {
    members: { members },
    products: { tableProducts },
    alerts: { setAlert },
    user: { user, setUser },
  } = useStore();
  const session = useSession();
  const { fetchStock, fetchMembers, fetchMembersAndTeams } = useFetch();
  const [loading, setLoading] = useState(true);
  const [avgAge, setAvgAge] = useState<number>(0);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setAuthInterceptor(sessionStorage.getItem("accessToken"));
      if (!members.length) {
        fetchMembersAndTeams();
      }
      if (!tableProducts.length) {
        fetchStock();
      }
    }
    if (session.data?.user?._id) {
      AuthServices.getUserInfro(session.data.user._id)
        .then((userInfo) => {
          setUser(userInfo);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }

    if (!user || !user.computerExpiration) {
      console.error("usuario", user);
    }

    setLoading(false);
  }, [fetchStock, fetchMembers, fetchMembersAndTeams, members, tableProducts, user]);

  const handleAvgAgeCalculated = (calculatedAvgAge: number) => {
    setAvgAge(calculatedAvgAge);
  };

  const handleBirthdayGiftClick = async () => {
    try {
      await UserServices.notifyBirthdayGiftInterest(
        user.email,
        user.tenantName
      );
      setAlert("birthdayGiftAlert");
    } catch (error) {
      console.error("Failed to send Slack message:", error);
    }
  };

  const { data } = useSession();

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 w-full h-full  ">
        <section className="grid grid-cols-2 gap-4 h-1/2 ">
          {tableProducts.length ? (
            <Card
              Title="My Assets"
              titleButton="Shop Now"
              icon={<ShopIcon />}
              onClick={() => {
                const {
                  user: { email, tenantName },
                } = data;

                window.open(CATALOGO_FIRST_PLUG, "_blank");
                UserServices.notifyShop(email, tenantName);
              }}
            >
              <StockCard products={tableProducts} />
            </Card>
          ) : (
            <EmptyDashboardCard type="stock" />
          )}

          {tableProducts.length ? (
            <Card
              Title="Computer Updates"
              RightContent={
                <ComputerAgeChart
                  products={tableProducts}
                  onAvgAgeCalculated={handleAvgAgeCalculated}
                  computerExpiration={user.computerExpiration}
                />
              }
              FooterContent={
                <p className="text-dark-grey font-medium text-sm">
                  Avg computer age:{" "}
                  <span
                    style={{
                      backgroundColor: getBarColor(
                        avgAge,
                        user.computerExpiration,
                        avgAge
                      ),
                      color: "black",
                      padding: "0 4px",
                      borderRadius: "4px",
                    }}
                  >
                    {avgAge.toFixed(2)} years
                  </span>
                </p>
              }
            >
              <div className="mt-4"></div>
              <ComputerUpdateCard products={tableProducts} />
            </Card>
          ) : (
            <EmptyDashboardCard type="computer" />
          )}
        </section>

        <section className="grid grid-cols-2 gap-4 h-1/2  ">
          {members.length ? (
            <>
              <Card
                Title="Upcoming Birthdays"
                titleButton="Birthday Gifts"
                icon={<ShopIcon />}
                onClick={() => {
                  handleBirthdayGiftClick();
                }}
              >
                <TeamHomeCard />
              </Card>
            </>
          ) : (
            <EmptyDashboardCard type="members" />
          )}
          <EmptyDashboardCard type="recentActivity" />
        </section>
      </div>
    </PageLayout>
  );
});
