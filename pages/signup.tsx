import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../components/layout/Layout"));
const AuthLayout = dynamic(() => import("../components/layout/Auth-layout"));
const Registration = dynamic(() => import("../components/auth/Register"));

const SignUp: React.FunctionComponent = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <AuthLayout>
        <Registration />
      </AuthLayout>
    </MasterLayout>
  );
};
export default SignUp;
