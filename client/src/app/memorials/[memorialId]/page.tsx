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
  const res = await fetch(`http://localhost:4000/memorials/${memorialId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Memorial not found");
  }
  return res.json();
};

// 정적 경로 생성
export async function generateStaticParams(): Promise<{ params: { memorialId: string } }[]> {
  const res = await fetch("http://localhost:4000/memorials");
  const memorials: MemorialProps[] = await res.json();

  return memorials.map((memorial) => ({
    params: { memorialId: memorial.id.toString() },
  }));
}

// 페이지 컴포넌트
type PageProps = {
  params: {
    memorialId: string;
  };
};

// 페이지 컴포넌트를 비동기 함수로 설정
const MemorialPage: FC<PageProps> = async ({ params }) => {
  const memorial = await fetchMemorial(params.memorialId);
  return <ProfileDesc memorial={memorial} />;
};

type AsyncPage<P = {}> = (props: P) => Promise<JSX.Element>;

const MemorialPage: AsyncPage<PageProps> = async ({ params }) => {
  const memorial = await fetchMemorial(params.memorialId);
  return <ProfileDesc memorial={memorial} />;
};

export default AsyncMemorialPage;
