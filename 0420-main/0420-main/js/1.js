 $(function(){

        $.ajax({

          url: "./json/1.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $(".box").eq(i).append( '<div><a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a></div>'); 


                $(".box").eq(i).append('<h5>'+data[i].title+"</h5>");      

                $(".box").eq(i).append('<del>'+data[i].sale+"</del>");                             

                $(".box").eq(i).append("<h3>"+data[i].price+"</h3>");



                //review random count

                var count = Math.floor(Math.random() * 100);
                $(".box").eq(i).append("<button>"+count+" REVIEWS"+"</button>");


              }

            }

          }

        });


      });


