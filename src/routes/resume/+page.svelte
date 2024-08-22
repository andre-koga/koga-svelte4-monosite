<script lang="ts">
	// import resume-data from constants
	import { experiences, groupedSkills, awards } from '$constants/resume-data';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import PillLabel from '$ui/PillLabel.svelte';
	import Header from '$layout/Header.svelte';
</script>

<Header />

<div class="mx-3 mb-20 grid gap-12 sm:mx-4 md:mx-12 lg:mx-20">
	<first-section class="flex h-[40vh] flex-col justify-evenly">
		<h1 class="mx-4 text-center font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
			Resume
		</h1>
		<a class="text-center" href="/resume.pdf">
			<PillLabel
				bgColor="border dark:border-lightbg border-darkbg hover:scale-95 transition-all"
				text="check my one-pager here! (outdated)"
			/>
		</a>
	</first-section>

	<education class="mb-10 block">
		<h2 class="text-center font-display text-2xl md:text-3xl lg:text-4xl">Education</h2>
		<p class="text-center text-sm text-gray-600 dark:text-gray-400">
			Currently studying Computer Science at Georgia Tech with a focus on Intelligence and Media. Go
			Jackets!
		</p>
	</education>

	<experience class="block">
		<h2 class="font-display text-2xl md:text-3xl lg:text-4xl">Experience</h2>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			I've started and helped a couple startups, some of which have already gone through the funding
			stage. My biggest project so far is Flux Slides, which is currently in the MVP stage.
		</p>
		<ul class="mt-8 grid gap-4 lg:grid-cols-2">
			{#each experiences as experience}
				<div
					class="relative grid gap-2 border border-darkbg bg-lightbg p-4 dark:border-lightbg dark:bg-darkbg"
				>
					{#if experience.href}
						<a class="absolute right-4 top-4" href={experience.href}
							><SquareArrowOutUpRight class="h-5 w-5" /></a
						>
					{:else}
						<span class="absolute right-4 top-4 opacity-40"
							><SquareArrowOutUpRight class="h-5 w-5" /></span
						>
					{/if}
					<h3 class="font-display text-xl md:text-2xl lg:text-3xl">
						{experience.title}
					</h3>
					<p class="text-sm md:text-base lg:text-lg">
						{experience.description}
					</p>
					<div class="my-1.5 flex flex-wrap gap-2">
						{#each experience.tech as tech}
							<p class=" bg-darkbg bg-opacity-20 px-2 text-sm dark:bg-lightbg dark:bg-opacity-20">
								{tech}
							</p>
						{/each}
					</div>
					<p class="text-sm md:text-base">
						{experience.date}
					</p>
				</div>
			{/each}
		</ul>
	</experience>

	<skills class="block"
		><h2 class="font-display text-2xl md:text-3xl lg:text-4xl">Skills</h2>
		<ul class="mt-8 grid gap-4 lg:grid-cols-2">
			{#each groupedSkills as groupedSkill}
				<div
					class="grid gap-2 border border-darkbg bg-lightbg p-4 dark:border-lightbg dark:bg-darkbg"
				>
					<h3 class="font-display text-xl md:text-2xl lg:text-3xl">
						{groupedSkill.name}
					</h3>
					<ul class="flex flex-wrap items-center gap-2">
						<p class="order-1 flex-grow bg-opacity-40 px-2 text-sm">PROFICIENT</p>
						{#each groupedSkill.skills as skill}
							{#if skill.level == 3}
								<p class="order-1 bg-red-400 bg-opacity-80 px-2 text-sm text-black">
									{skill.name}
								</p>{/if}
						{/each}
					</ul>
					<ul class="flex flex-wrap items-center gap-2">
						<p class="order-1 flex-grow bg-opacity-40 px-2 text-sm">INTERMEDIATE</p>
						{#each groupedSkill.skills as skill}
							{#if skill.level == 2}
								<p class="order-2 bg-orange-400 bg-opacity-80 px-2 text-sm text-black">
									{skill.name}
								</p>
							{/if}
						{/each}
					</ul>
					<ul class="flex flex-wrap items-center gap-2">
						<p class="order-1 flex-grow bg-opacity-40 px-2 text-sm">NOVICE</p>
						{#each groupedSkill.skills as skill}
							{#if skill.level == 1}
								<p class="order-3 bg-yellow-400 bg-opacity-80 px-2 text-sm text-black">
									{skill.name}
								</p>
							{/if}
						{/each}
					</ul>
				</div>
			{/each}
		</ul>
	</skills>

	<!-- svelte-ignore component-name-lowercase -->
	<awards class="block">
		<h2 class="font-display text-2xl md:text-3xl lg:text-4xl">Awards</h2>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			I was an mathlete during middle and high school ranked 12th best in Brazil, almost going to
			the International Math Olympiad, one of the most prestigious math competitions in the world.
			I've been to international competitions all around, including the best U14 medal in OMR 2015.
		</p>
		<p class="block text-sm italic text-gray-500 sm:hidden">
			check the website on a computer to see more data!
		</p>
		<ul class="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
			<div>
				{#each awards as awardSubject, i}
					{#if i == 0}
						<div
							class="grid gap-2 overflow-hidden border border-darkbg bg-lightbg p-4 dark:border-lightbg dark:bg-darkbg"
						>
							<h3 class="font-display text-xl md:text-2xl lg:text-3xl">
								{awardSubject.subject}
							</h3>
							{#each awardSubject.awards as award}
								<div class="grid grid-cols-4 gap-2 overflow-hidden sm:grid-cols-8">
									<p
										class="hidden bg-darkbg bg-opacity-20 px-2 text-center text-sm sm:block dark:bg-lightbg dark:bg-opacity-20"
									>
										{award.year}
									</p>
									<p
										class="col-span-3 flex-grow overflow-hidden text-ellipsis text-nowrap bg-darkbg bg-opacity-20 px-2 text-center text-sm sm:col-span-4 dark:bg-lightbg dark:bg-opacity-20"
									>
										{award.title}
									</p>
									{#if award.location == 'world'}
										<p
											class="hidden bg-blue-500 bg-opacity-50 px-2 text-center text-sm uppercase sm:col-span-2 sm:block dark:bg-blue-400 dark:bg-opacity-50"
										>
											{award.location.toString()}
										</p>
									{:else}
										<p
											class="hidden bg-darkbg bg-opacity-20 px-2 text-center text-sm uppercase sm:col-span-2 sm:block dark:bg-lightbg dark:bg-opacity-20"
										>
											{award.location.toString()}
										</p>
									{/if}
									{#if award.prize == 'gold'}
										<p
											class=" bg-yellow-300 bg-opacity-70 px-2 text-center text-sm uppercase text-black dark:bg-yellow-400 dark:bg-opacity-70"
										>
											{award.prize}
										</p>
									{:else if award.prize == 'silver'}
										<p
											class=" bg-gray-300 bg-opacity-70 px-2 text-center text-sm uppercase text-lighttext dark:bg-gray-400 dark:bg-opacity-70"
										>
											{award.prize}
										</p>
									{:else if award.prize == 'bronze'}
										<p
											class=" bg-orange-300 bg-opacity-50 px-2 text-center text-sm uppercase dark:bg-orange-400 dark:bg-opacity-50"
										>
											{award.prize}
										</p>
									{:else}
										<p
											class=" bg-darkbg bg-opacity-20 px-2 text-center text-sm uppercase dark:bg-lightbg dark:bg-opacity-20"
										>
											{award.prize}
										</p>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
			<div class="grid gap-4">
				{#each awards as awardSubject, i}
					{#if i > 0}
						<div
							class="grid gap-2 overflow-hidden border border-darkbg bg-lightbg p-4 dark:border-lightbg dark:bg-darkbg"
						>
							<h3 class="font-display text-xl md:text-2xl lg:text-3xl">
								{awardSubject.subject}
							</h3>
							{#each awardSubject.awards as award}
								<div class="grid grid-cols-4 gap-2 overflow-hidden sm:grid-cols-8">
									<p
										class="hidden bg-darkbg bg-opacity-20 px-2 text-center text-sm sm:block dark:bg-lightbg dark:bg-opacity-20"
									>
										{award.year}
									</p>
									<p
										class="col-span-3 flex-grow overflow-hidden text-ellipsis text-nowrap bg-darkbg bg-opacity-20 px-2 text-center text-sm sm:col-span-4 dark:bg-lightbg dark:bg-opacity-20"
									>
										{award.title}
									</p>
									{#if award.location == 'world'}
										<p
											class="hidden bg-blue-500 bg-opacity-50 px-2 text-center text-sm uppercase sm:col-span-2 sm:block dark:bg-blue-400 dark:bg-opacity-50"
										>
											{award.location.toString()}
										</p>
									{:else}
										<p
											class="hidden bg-darkbg bg-opacity-20 px-2 text-center text-sm uppercase sm:col-span-2 sm:block dark:bg-lightbg dark:bg-opacity-20"
										>
											{award.location.toString()}
										</p>
									{/if}
									{#if award.prize == 'gold'}
										<p
											class=" bg-yellow-300 bg-opacity-70 px-2 text-center text-sm uppercase text-black dark:bg-yellow-400 dark:bg-opacity-70"
										>
											{award.prize}
										</p>
									{:else if award.prize == 'silver'}
										<p
											class=" bg-gray-300 bg-opacity-70 px-2 text-center text-sm uppercase text-lighttext dark:bg-gray-400 dark:bg-opacity-70"
										>
											{award.prize}
										</p>
									{:else if award.prize == 'bronze'}
										<p
											class=" bg-orange-300 bg-opacity-50 px-2 text-center text-sm uppercase dark:bg-orange-400 dark:bg-opacity-50"
										>
											{award.prize}
										</p>
									{:else}
										<p
											class=" bg-darkbg bg-opacity-20 px-2 text-center text-sm uppercase dark:bg-lightbg dark:bg-opacity-20"
										>
											{award.prize}
										</p>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</ul>
	</awards>
</div>
