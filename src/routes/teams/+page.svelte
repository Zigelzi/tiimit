<script lang="ts">
	import teams from '$lib/stores/teams';

	let currentTeams;
	teams.subscribe((teams) => {
		console.log(teams);
		currentTeams = teams;
	});
</script>

<div>
	<div>
		Team 1:
		{currentTeams.team1}
	</div>
	<div>
		Team 2:
		{currentTeams.team2}
	</div>
</div>
