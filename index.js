function lowerCaseDrivers(collection)
{
  var newcollection = collection.map(function(x) { x.toLowerCase();})
  return newcollection;
}
