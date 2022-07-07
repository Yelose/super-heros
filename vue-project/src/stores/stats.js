import { defineStore } from "pinia";

export const userStatsStore = defineStore({
    id: "stats",
    state: () => ({
      stats: [
        {
          name: "Intelligence",
          initials: "INT",
          description:
            "controls a character's ability to comprehend foreign languages and their skill in magic. Intelligence controls how many skill points the character gets at level up. It also controls the rate at which experience points are earned, or the amount needed to level up.",
          image: "/src/assets/img/staff.png",
          color: "#FFF27D",
        },
        {
          name: "Strength",
          initials: "STR",
          description:
            "is a  measure of how physically strong a character is, it controls the power and damage of melee attacks, the maximum weight the character can carry, and hit points. Armor and weapons might also have a Strength requirement to use them. A measure of how sturdy a character is",
          image: "/src/assets/img/espada2.png",
          color: "#DF5F5F",
        },
        {
          name: "Speed",
          initials: "SPD",
          description:
            "or movement is an inherited trait possessed by every living being. Even the most stationary of animals like the tube worm weave and dance gracefully at the ocean floor.",
          image: "/src/assets/img/destello.png",
          color: "#A19740",
        },
        {
          name: "Durability",
          initials: "DUR",
          description:
            "is the property which guarantees the ability to survive a certain amount of force. Not to be confused with Endurance. Durability is the ability to withstand damage, while Endurance is a measure of stamina.",
          image: "/src/assets/img/escudo2.png",
          color: "#7BA4F3",
        },
        {
          name: "Power",
          initials: "POW",
          description:
            "stat affect your capability of using different kind of weapons, the more power your hero has, the heavier weapon she or he can equip, and the heavier shield.",
          image: "/src/assets/img/potion.png",
          color: "#824084",
        },
        {
          name: "Combat",
          initials: "COM",
          description:
            "refers to the chance of a critical strike in combat. Critical strikes increase damage by a substantial amount, ranging from 1.5 times damage, all the way up to 10, and more. This attribute is often favorable for characters that attack fast, such as dual wielding classes.",
          image: "/src/assets/img/combat.png",
          color: "#9CA69D",
        },
      ],
    }),
  });
  
