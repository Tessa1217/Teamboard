import { FormField, Input, Button } from "@repo/ui";
const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <div className="bg-gray-200 w-1/2 max-w-xl min-w-sm h-1/2 min-h-[40%] rounded-lg shadow-md p-6">
        <div className="bg-white w-full h-full rounded-lg p-10 flex flex-col gap-4">
          <FormField label="아이디" labelVisible={true}>
            <Input inputWidth="full" inputSize="lg" />
          </FormField>
          <FormField label="패스워드" labelVisible={true}>
            <Input inputWidth="full" inputSize="lg" />
          </FormField>
          <Button width="full" size="lg" color="blue">
            로그인
          </Button>
          <Button width="full" size="lg" color="green">
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
