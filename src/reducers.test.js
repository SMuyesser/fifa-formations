import reducer from './reducers';

describe('gameReducer', () => {
	let initialState;
	let state;

	beforeEach(() => {
		initialState = {
			formation: '',
			image: 'empty',
			strength: [],
			weakness: [],
			defInstructions: [],
			midInstructions: [],
			fwdInstructions: [],
			defTacticsPress: 0,
			defTacticsAggr: 0,
			defTacticsWidth: 0,
			defTacticsLine: '',
			ccTacticsPass: 0,
			ccTacticsShoot: 0,
			ccTacticsCross: 0,
			ccTacticsPos: '',
			buildUpTacticsSpd: 0,
			buildUpTacticsPass: 0,
			buildUpTacticsPos: ''
		}
	});

	it('should test reducer for SET_SCORES', () => {
		state = initialState;
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
		state = reducer(state, {
			type: 'SET_FORMATION',
			formation: formation
		});
		expect(state.formation).toEqual(formation);
	});	
});