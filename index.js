function lowerCaseDrivers(collection)
{
  var lowers = collection.map(function(x) { return x.toLowerCase(); });
  return lowers;
}

function nameToAttributes(collection)
{
  const newCollection = collection.map(
      function (item)
      {
        var newItem = item.split(" ");
        return Object.assign({}, { firstName: newItem[0], lastName: newItem[1] });
      }
    );

  return newCollection;
}

function attributesToPhrase(collection)
{
  const newCollection = collection.map(
      function (item)
      {
        var newItem = item.split(" ");
        return Object.assign({}, "$newItem[0] is from $newItem[1]");
      }
    );

  return newCollection;
}
