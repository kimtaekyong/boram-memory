"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 페이지가 처음 렌더링될 때 intro 페이지로 리디렉션
    router.push("/intro");
  }, [router]);

  return null; // 리디렉션 후에는 이 컴포넌트가 렌더링되지 않음
}
