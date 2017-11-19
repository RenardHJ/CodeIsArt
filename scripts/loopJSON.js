function loopJSON(obj)
{
  body = obj.body;
  for(let line in body)
  {
    console.log(body[line].hasOwnProperty('body'))
    if(body[line].hasOwnProperty('body'))
    {
      loopJSON(body[line]);
    }
    else
      console.log(body[line]);
    }
}
