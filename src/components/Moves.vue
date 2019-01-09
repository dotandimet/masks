<template>
<div class="mls-list">
<h2>Moves</h2>
<div class="container">
    <div class="move" v-for="move in basic" v-bind:key="move.name">
        <div class="move-header">{{ move.name}}</div>
        <div class="move-roll">{{ move.roll }}</div>
        <div class="move-description">{{ move.description }}</div>
    </div>
</div>
</div>
</template>
<script>
export default {
    name: 'Moves',
    data () {
        return {
            'basic': [
                {
               'name': 'DIRECTLY ENGAGE A THREAT',
               'roll': 'Danger',
               'description':
               `When you directly engage a threat, roll + Danger. On a hit, trade blows. On a 10+,
pick two. On a 7-9, pick one:
• resist or avoid their blows
• take something from them
• create an opportunity for your allies
• impress, surprise, or frighten the opposition`
                },
                { 'name':      'UNLEASH YOUR POWERS',
                    'roll': 'Freak',
                   'description':
`When you unleash your powers to overcome an obstacle, reshape your environment,
or extend your senses, roll + Freak. On a hit, you do it. On a 7-9, mark a condition or the
GM will tell you how the effect is unstable or temporary.`
                },
                { 'name': 'DEFEND SOMEONE',
                   'roll': 'Savior',
                  'description':
`When you defend someone or something from an immediate threat, roll + Savior. For
NPC threats: on a hit, you keep them safe and choose one. On a 7-9, it costs you: expose
yourself to danger or escalate the situation.
• add a Team to the pool
• take Influence over someone you protect
• clear a condition
For PC threats: on a hit, give them -2 to their roll. On a 7-9, you expose yourself to cost,
retribution, or judgment.`
                },
                {
                    'name': 'ASSESS THE SITUATION',
                    'roll': 'Superior',
                    'description':
`When you assess the situation, roll + Superior. On a 10+, ask two. On a 7-9, ask one.
Take +1 while acting on the answers.
• what here can I use to ________?
• what here is the biggest threat?
• what here is in the greatest danger?
• who here is most vulnerable to me?
• how could we best end this quickly?
` },
{
    'name': 'PROVOKE SOMEONE',
    'roll': 'Superior',
    'description':
`When you provoke someone susceptible to your words, say what you’re trying to get
them to do and roll + Superior. For NPCs: on a 10+, they rise to the bait and do what you
want. On a 7-9, they can instead choose one:
• they stumble: you take +1 forward against them
• they err: you gain a critical opportunity
• they overreact: you gain influence over them
For PCs: on a 10+, both. On a 7-9, choose one.
• if they do it, add a Team to the pool
• if they don’t do it, they mark a condition
` },
{ 'name': 'COMFORT OR SUPPORT SOMEONE',
    'roll': 'Mundane',
    'description':
`When you comfort or support someone, roll + Mundane. On a hit, they hear you: they
mark potential, clear a condition, or shift Labels if they open up to you. On a 10+, you
can also add a Team to the pool or clear a condition yourself`
},
{ 'name':'PIERCE THE MASK',
    'roll': 'Mundane',
'description':
`When you pierce someone’s mask to see the person beneath, roll + Mundane. On a
10+, ask three. On a 7-9, ask one.
• what do you intend to do?
• how could I get your character to ___?
• how could I gain Influence over you?
• what are you really planning?
• what do you want me to do?
` } ],
        }
    }
}
</script>

