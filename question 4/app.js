
// JAVASCRPIT
const data = {
	"users" : [

		{
			"id" : "1",
			"firstName" : "admin2",
			"name" : "admin2 admin"
		} ,	
		{
			"id" : "2",
			"firstName" : "admin2",
			"name" : "admin admin"
		} ,
		{
			"id" : "3",
			"firstName" : "Demo ",
			"name" : "Demo Tracker"
		} 
	]

}


const addFullname = ()=>{

	const response = data.users.map((e) =>{
		return {
			...e ,
			fullName : e.firstName
		}
		
	})

	console.log(response)

}

addFullname()