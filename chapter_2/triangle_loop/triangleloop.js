(function() {

  var hashString = "";

  var makeHashTriangle = function(string) {

    while(string.length < 7) {
      string += '#';
      console.log(string);
    }
    return string;
  };

  makeHashTriangle(hashString);

}());
