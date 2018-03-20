getConfigs(){

  var Env_url = 'https://8rb4rkeuwh.execute-api.us-east-1.amazonaws.com/Prod/configs/EnvironmentVars';
  let env_d='';
  fetch(Env_url).then(function(res) {
    // res instanceof Response == true.
    if (res.ok) {
      res.json().then(function(env_d) {
        console.log(env_d);
          env_d = env_d;
      });
    } else {
      console.log("Looks like the response wasn't perfect, got status", res.status);
    }
  }, function(e) {
    console.log("Fetch failed!", e);
  });
}
