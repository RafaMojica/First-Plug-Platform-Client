import { BASE_URL, HTTPRequests } from "@/config/axios.config";
import { MembersModelZod, PrdouctModelZod } from "@/types";

export class CsvServices {
  static async bulkCreateProducts(data: PrdouctModelZod[]) {
    const response = await HTTPRequests.post(
      `${BASE_URL}/api/products/bulkcreate`,
      data
    );
    return response.data;
  }
  static async bulkCreateTeams(data: MembersModelZod[]) {
    const response = await HTTPRequests.post(
      `${BASE_URL}/api/members/bulkcreate`,
      data
    );
    return response.data;
  }
}
