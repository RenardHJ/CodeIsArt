function loopJSON(obj) {
  body = obj.body;
  console.log(body);
  for (line in body)
  {
    // 7if (body[line].hasOwnProperty('body'))
    // {
    //   console.log(body[line].type)
    //   loopJSON(body[line]);
    // }
    // else
    // {
      console.log(body[line]);
    //}
  }
  return;
}
