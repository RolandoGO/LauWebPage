const functions = require("firebase-functions");
const admin = require("firebase-admin")
admin.initializeApp()

exports.addAdminRole = functions.https.onCall((data, context)=>{

    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid, {
            admin:true
        })
    }).then(()=>{
        return {
            message: `user ${data.email} is an admin`
        }
    })
    .catch(err=>{
        return err
    })
}) 