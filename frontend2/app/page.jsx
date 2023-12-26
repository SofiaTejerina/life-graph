"use client";

import { redirect } from "next/navigation";

export default function Page() {
  if (localStorage.getItem("token")) {
    redirect("/board");
  } else {
    redirect("/login");
  }
}
