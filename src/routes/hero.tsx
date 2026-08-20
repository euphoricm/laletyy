import { createFileRoute } from "@tanstack/react-router";
import { TributeRoom } from "@/components/TributeRoom";
export const Route = createFileRoute("/hero")({
  component: () => (
    <TributeRoom
      room={{
        eyebrow: "Your kind of magic",
        title: "More than a big sister",
        intro:
          "You have been a beautiful part of my world, and the place you hold in my heart is yours forever.",
        lines: [
          "You are like a big sister to me in the ways that matter most. You are someone I look at with admiration, someone whose happiness feels personal to me, and someone I want to keep reminding that she is doing better than she sometimes knows. There is comfort in knowing you are in my life, and there is real joy in getting to celebrate you today.",
          "Being gorgeous is part of you, Laleti, but it is never the whole story. The real beauty is the way your presence carries warmth, the way your smile changes the atmosphere, and the way you can make a memory feel special just by being part of it. I hope you see yourself through the eyes of people who love you, because they see so much more than a pretty face.",
          "You are awesome because you are fully yourself. You have your own spark, your own way of moving through a room and your own kind of light. As you turn twenty, I hope you never feel pressured to become smaller, quieter or less vivid for anyone else's comfort. The right people will always make space for the whole of you.",
          "This next chapter is yours to shape. I hope it brings you brave decisions, soft places to land, friendships that feel safe and dreams that remind you how much is still possible. Whatever comes next, carry this with you: you are loved, you are worthy of good things and you will always have someone cheering for you.",
        ],
        next: "/gallery",
        nextLabel: "Next: Laleti's gallery",
      }}
    />
  ),
});
