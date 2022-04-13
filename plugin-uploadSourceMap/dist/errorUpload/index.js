!(
    function handleError(){
        console.log('质量监控脚本自动执行')
        window.onerror = (msg, url, line, col, error) => {
          console.log("line:",line)
          console.log("col:",col)
          uploadMsg({msg, url, line, col, error});
        }
    }
)()

function uploadMsg(errorMsg){
    let {projectId, projectName, version} = window.watchInit;
    axios.post('http://localhost:3030/uploadMsg',{
        projectId,
        projectName,
        version,
        errorMsg
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}