function loopJSON(obj)
{
  body = obj.body;
  for (line in body)
  {
    if (body[line].hasOwnProperty('body'))
    {
      console.log(body[line].type)
      loopJSON(body[line]);
    }
    else
    {
      console.log(body[line]);
    }
  }
  return;
}
