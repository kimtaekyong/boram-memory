import { FC } from "react";
import ProfileDesc from "@/components/ProfileDesc";

// memorial 데이터 타입 정의
type MemorialProps = {
  id: number;
  name: string;
  date_of_death: string;
  date_of_birth: string;
  family_members: string;
};

// 서버에서 memorial 데이터 패칭
const fetchMemorial = async (memorialId: string): Promise<MemorialProps> => {
  const res = await fetch(`https://api.example.com/memorials/${memorialId}`, {
    cache: "no-store", // 최신 데이터 패칭
  });
  if (!res.ok) {
    throw new Error("Memorial not found");
  }
  return res.json();
};

// 정적 경로 생성
export async function generateStaticParams() {
  const res = await fetch("https://api.example.com/memorials");
  const memorials: MemorialProps[] = await res.json();

  return memorials.map((memorial) => ({
    memorialId: memorial.id.toString(),
  }));
}

// 페이지 컴포넌트
type PageProps = {
  params: {
    memorialId: string;
  };
};

const MemorialPage: FC<PageProps> = async ({ params }) => {
  const memorial = await fetchMemorial(params.memorialId);

  return <ProfileDesc memorial={memorial} />;
};

export default MemorialPage;
