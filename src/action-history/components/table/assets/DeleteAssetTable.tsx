import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Product } from "@/types";
import MemberNameAndLocation from "../../member-name/MemberNameAndLocation";

interface AssetAttribute {
  key: string;
  value: string;
}

interface Asset {
  category: string;
  name: string;
  serialNumber: string;
  location?: string;
  assignedMember?: string;
  attributes?: AssetAttribute[];
  recoverable: boolean;
}

interface AssetsTableProps {
  data: Asset | Asset[];
}

const DeleteAssetsTable: React.FC<AssetsTableProps> = ({ data }) => {
  const normalizedData: Asset[] = Array.isArray(data) ? data : [data];

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-gray-200 bg-light-grey rounded-md">
          <TableHead className="py-3 px-4 border-r text-start text-black font-semibold">
            Category
          </TableHead>
          <TableHead className="py-3 px-4 border-r text-start text-black font-semibold">
            Brand + Model + Name
          </TableHead>
          <TableHead className="py-3 px-4 border-r text-start text-black font-semibold">
            Serial
          </TableHead>
          <TableHead className="py-3 px-4 text-start text-black font-semibold">
            Location / Assigned Member
          </TableHead>
          <TableHead className="py-3 px-4 text-start text-black font-semibold">
            Recoverable
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {normalizedData.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="h-24 text-center">
              No assets found.
            </TableCell>
          </TableRow>
        ) : (
          normalizedData.map((asset, index) => (
            <TableRow key={index}>
              <TableCell className="text-xs py-2 px-4 border-r">
                {asset.category}
              </TableCell>
              <TableCell className="text-xs py-2 px-4 border-r">
                {[
                  asset.attributes?.find((attr) => attr.key === "brand")?.value,
                  asset.attributes?.find((attr) => attr.key === "model")?.value,
                  asset.name,
                ]
                  .filter(Boolean)
                  .join(" ")}{" "}
              </TableCell>
              <TableCell className="text-xs py-2 px-4 border-r">
                {asset.serialNumber || "N/A"}
              </TableCell>
              <TableCell className="text-xs py-2 px-4">
                <MemberNameAndLocation product={asset as Product} />
              </TableCell>
              <TableCell className="text-xs py-2 px-4">
                {asset.recoverable ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default DeleteAssetsTable;
