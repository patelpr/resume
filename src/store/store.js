import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
			state: {
				about: {
					nick: "devjutzu",
					name: "Parth",
					profession: "Full-Stack Developer",
					email: "devjutzu@gmail.com",
					goals: "I want to become a remote developer working on various projects and spending time with my family.",
					lang: ["English", "Gujarati"],
					summary: [
						"Experienced building projects from the ground up.",
						"Skilled at writing well designed, testable, and efficient code using current best practices in development.",
						"Dedicated to learning and remaining up to date with leading edge coding methods and languages.",
						"Effective team player focused on customer satisfaction.",
					],
					svg: [
						"android",
						"androidstudio",
						"angularjs",
						"apple",
						"babel",
						"bower",
						"buymeacoffee",
						"canva",
						"codecademy",
						"codesandbox",
						"codewars",
						"css3",
						"facebook",
						"firebase",
						"flask",
						"freecodecamp",
						"git",
						"github",
						"gmail",
						"googlechrome",
						"googlehangouts",
						"heroku",
						"html5",
						"hyundai",
						"javascript",
						"jquery",
						"json",
						"mocha",
						"mongodb",
						"netlify",
						"node",
						"nodemon",
						"npm",
						"php",
						"postman",
						"pug",
						"razer",
						"react",
						"redux",
						"sass",
						"skype",
						"slack",
						"steam",
						"visualstudiocode",
						"vue",
						"windows",
						"yarn",
					],
					project: [
						{
							name: "Vaycay",
							desc:
								"Created a Node app inspired by my love for travel",
							url: "http://fathomless-beach-31066.herokuapp.com/",
							stack: ["heroku", "javascript", "node", "html"],
						},
						{
							name: "Wahfoodina",
							desc: "App using recipe API",
							url: "http://wahfoodina.firebaseapp.com",
							stack: ["html", "css", "javascript"],
						},
					],
					education: [{
						name: "Thinkful",
						program: "Full Stack Program",
						url:'http://www.thinkful.com',
						description: [
							"Intensive course in full stack JavaScript development",
							"Learned industry best practices and practical software development standards by collaborating several hours a week with a senior web developer.",
						]},{
						name: "freeCodeCamp",
						program: "Online Self Code Course",
						url:'http://www.freecodecamp.com',
						description: [
							"Learn to code by completing coding challenges and building projects. ",
						],
					}],
					experience: [
						{
							company: "Master Graphic Services",
							location: {
								city: "Chamblee",
								state: "GA",
							},
							position: "Pre-Press Technician",
							years: {
								start: "2014",
								end: "Now",
							},
							desc: [
								"Organize multiple procedure-based jobs to meet job requirements",
								"Developed systems to allow for mobile/anywhere access for employees and integrated cloud computing.",
								"Developed Evernote system to replace the previous paper based system, which resulted in considerable time savings.",
							],
						},
						{
							company: "Techy Express ",
							location: {
								city: "Alpharetta",
								state: "GA",
							},
							position: "Owner/ Lead Developer",
							years: {
								start: "2009",
								end: "2014",
							},
							desc: [
								"Built personal and business websites and sold monthly packages to businesses (e.g.: www.questtravelgroup.com)",
								"Used sales techniques to meet customers’ needs and company goals.",
								"Trained and coached new team members.",
							],
						},
						{
							company: "The Knowledge Shop",
							location: {
								city: "Marietta",
								state: "GA",
							},
							position: "Lead Technician",
							years: {
								start: "2011",
								end: "2013",
							},
							desc: [
								"Built, fixed, or modified 30+ computers to meet specific requirements of pan testing",
								"Proctored employment tests to clients who were applying for careers in companies such as TSA, USPS, or Direct TV",
								"Marketed online sales and training events.",
							],
						},
						{
							company: "Bay Tree Solutions",
							location: {
								city: "Roswell",
								state: "GA",
							},
							position: "Data Entry / Account Manager",
							years: {
								start: "2009",
								end: "2010",
							},
							desc: [
								"Wrote an Excel macro to extract data from an online database and created a digital copy of the content in a spreadsheet.",
								"Created a server for the company where all contacts were stored.",
								"Made sales calls to timeshare owners.",
							],
						},
					],
					slugs: {
						tools: [
							"androidstudio",
							"bower",
							"canva",
							"codesandbox",
							"firebase",
							"git",
							"github",
							"googlechrome",
							"heroku",
							"netlify",
							"nodemon",
							"npm",
							"postman",
							"visualstudiocode",
							"yarn",
						],
						quip: ["android", "hyundai", "razer", "windows"],
						stacks: [
							"angularjs",
							"babel",
							"css3",
							"flask",
							"html5",
							"javascript",
							"jquery",
							"json",
							"list",
							"mocha",
							"mongodb",
							"node",
							"php",
							"pug",
							"react",
							"redux",
							"sass",
							"vue",
						],
					},
				},
			}, //end state
		});
