function searchNames( logins ){
   logins.filter((f)=>{
      return  f[0].slice(-1)==='_'
    })
}

//[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ])