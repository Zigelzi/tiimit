<script lang="ts">
	import type { PageServerData } from './$types';
	import teams from '$lib/stores/teams';

	export let data: PageServerData;

	let availablePlayers = data.users;

	teams.subscribe((teams) => {
		console.log(teams.team1);
		console.log(teams.team2);
	});

	let game = {
		date: Date.now(),
		teams: []
	};

	let team1 = {
		players: []
	};

	let team2 = {
		players: []
	};

	$: {
		teams.update((previousTeams) => ({
			...previousTeams,
			team1,
			team2
		}));
	}

	function addToTeam(teamNumber: Number, player: any) {
		if (teamNumber === 1) {
			team1.players.push(player);
			team1.players = team1.players;
		}
		if (teamNumber === 2) {
			team2.players.push(player);
			team2.players = team2.players;
		}
		availablePlayers = availablePlayers.filter(
			(availablePlayer) => availablePlayer.id !== player.id
		);
	}
</script>

<h1 class="text-4xl font-bold">Tiimit</h1>
<div>
	<p>Tiimi 1 pelaajat: {team1.players.length}</p>
	<p>Tiimi 2 pelaajat: {team2.players.length}</p>
</div>
{#await availablePlayers}
	<p>Pending promise</p>
{:then playerList}
	<ol>
		{#each playerList as player}
			<li class="flex my-4 justify-between border-b-2 py-2">
				<p>
					{player.firstName}
					{player.lastName}
				</p>
				<div class="space-x-4">
					<button
						on:click={() => {
							addToTeam(1, player);
						}}
						class="px-4 py-2 bg-slate-300">V</button
					>
					<button
						on:click={() => {
							addToTeam(2, player);
						}}
						class="px-4 py-2 bg-slate-300">O</button
					>
				</div>
			</li>
		{/each}
	</ol>
{/await}
<div></div>
