import {SET_FORMATION, setFormation} from './actions';

	describe('setFormation', () => {
		it('Should return the action', () => {
			const formation = {
				"formation": "4-2-3-1(2)",
				"image": "4231(2)",
				"playerInstructions": {
					"def": [
						"LB/RB: Stay Back While Attacking"
					],
					"mid": [
						"CAM: Stay Forward",
						"CDM1/CDM2: Cut Passing Lanes & Stay Back While Attacking",
						"LM/RM: Stay Forward & Cut Inside"
					],
					"fwd": [
						"ST: Stay Central"
					]
				},
				"tactics": {
					"defence": {
						"pressure": 20,
						"aggression": 55,
						"teamWidth": 52,
						"defenderLine": "Cover"
					},
					"chanceCreation": {
						"passing": 70,
						"shooting": 40,
						"crossing": 60,
						"positioning": "Free Form"
					},
					"buildUp": {
						"speed": 85,
						"passing": 65,
						"positioning": "Organized"
					}
				},
				"weakness": [
					"Spacing",
					"One Striker"
				],
				"strength": [
					"Balanced",
					"Strong Midfield",
					"Strong Defence"
				]
			};
			const action = setFormation(formation);
			expect(action.type).toEqual(SET_FORMATION);
			expect(action.formation).toEqual(formation.formation);
		});
	});