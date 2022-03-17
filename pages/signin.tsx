import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../components/layout/Layout"));
const AuthLayout = dynamic(() => import("../components/layout/Auth-layout"));
const Login = dynamic(() => import("../components/auth/Login"));

const Signin: React.FunctionComponent = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </MasterLayout>
  );
};
export default Signin;
