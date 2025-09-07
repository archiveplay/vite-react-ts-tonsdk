import { Card, FlexBoxCol, FlexBoxRow } from "@/components/styled/styled";
import { useProfileData } from "@/hooks/user/useProfileData";

export function UserCard() {
  const { data, isLoading, error } = useProfileData();

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>Error: {(error as any).message}, user profile can not load</div>
    );

  return (
    <Card>
      <FlexBoxCol>
        <FlexBoxRow>user: {data?.user.username}</FlexBoxRow>
      </FlexBoxCol>
    </Card>
  );
}
