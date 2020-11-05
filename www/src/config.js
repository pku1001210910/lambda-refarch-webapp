// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7e1bqk43u5mnec7bljrf0s0rfg",     // CognitoClientID
  "api_base_url": "https://uyp6vtrv94.execute-api.ap-southeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-stack.auth.ap-southeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d134pr4akg221p.amplifyapp.com"                                      // AmplifyURL
};

export default config;
