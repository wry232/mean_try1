console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({},function(err,results){
      res.json(results);
    })
    // res.json({placeholder:'index'});
  };
  this.create = function(req,res){
    //your code here
    Friend.create(req.body, function(err,result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
    // res.json({placeholder:'create'});
  };
  this.update = function(req,res){
    console.log('req.body', req.body);
    //your code here
    Friend.findOne({_id:req.params.id},function(err,friend){
      if(err){
        console.log(err)
      }else{
        friend.firstName = req.body.firstName;
        friend.lastName = req.body.lastName;
        friend.birthday = req.body.birthday;
        friend.save(function(err,updatedFriend){
          if(err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
    // res.json({placeholder:'update'});
  };
  // this.delete = function(req,res){
  //   //your code here
  //   Friend.remove({_id:req.params.id}, function(err){
  //     if(err){
  //       console.log(err);
  //     }else{
  //       res.json({message:"Friend deleted"});
  //     }
  //   })
  //
  // };
  this.delete = function(req, res) {
    console.log(req.params.id);
        Friend.remove({_id: req.params.id}, function(err){
            if(err){console.log(err);}
            res.json();
        });
    };
  this.show = function(req,res){
    //your code here
    Friend.findOne({_id:req.params.id}, function(err,result){
      res.json(result);
    })

  };
}
module.exports = new FriendsController(); // what does this export?
