import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class AplicationController extends Controller {
	
	@action onSubmit(myTweet){
		let x= this.store.createRecord("draft-tweet",{
			avatar:"https://img.wonderhowto.com/img/26/46/63686855758540/0/secure-your-identity-become-anonymous-online-2019.1280x600.jpg",
			user_name:"Natan",
			description:myTweet,
			created_at:new Date()
		});
		x.save();



	}
}
