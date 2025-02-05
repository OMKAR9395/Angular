Angular Release on 14 sep 2016
MVC Architecture
Angular js and Angular are Different

npm install -g @angular/cli
ng new <project-name>
cd my-first-angular-app
npm start

{{}}		=>  	Interpolation Double Curli Bracket For Input Another Files Output

when we inside of class then we say properties to variables
and we out of class then we call variables

-----------------------------------------------------------------------
					Interpolation 
					
	Double Curli Braces Is Interpolation 
	Ts File Data Include In Html File 
	Execute Js Code In Html File THen Aply
	Syntax 	{{<Variable Name>}}
	
	File Names Will Be Same Like => app.component.html And app.component.ts
	
	Examples 
	
------------------------------------------------------------------------------
	CLI	=>	Command Line Interface
	
------------------------------------------------------------------------------

	Component
	
	Small Parts Is Components
	ng generate component <name>
	short hand => ng g c <name>
----------------------------------------------------------------------------------
Function Call In html file

functionCalll()
   
   
   When We Inside Of ts File Then Use
   this.functionCalll()
   
  ---------------------------------------------------------------------
  Data Type
   
   name:string="omkar";
   data:string|number="omkar";
   this.data=123;
   
   data:any=<anything>
   
   we can create variables inside of function 
   let a =10;
   var b = 20;
   const c = 30;
   
   sum(a:number , b:numbet){
   console.log(a+b);
   }