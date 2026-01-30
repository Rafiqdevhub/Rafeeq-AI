import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const client: any = hc<AppType>("");
