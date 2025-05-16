import React from "react";

export default function Archetype({ totalTasks = 20, completedTasks = 8, categoryCounts }) {
    // Determine task load
    let loadLabel = "Low load";
    if (totalTasks > 7) {
      loadLabel = "High load";
    }
  
    // Determine completion level
    let completionLabel = "low completion";
    if (completedTasks / (totalTasks || 1) > 0.5) {
      completionLabel = "high completion";
    }
  
    // Determine dominant category
    let dominantCategory = "Balanced";
    let maxCount = 0;
    // let sum = 0;
  
    // Count total tasks and find highest category
    for (let key in categoryCounts) {
      let count = categoryCounts[key];
    //   sum += count;
  
      if (count > maxCount) {
        maxCount = count;
        dominantCategory = key;
      }
    }
  
    // If all categories are fairly even, say it's Balanced
    let balanced = true;
    for (let key in categoryCounts) {
      let percent = categoryCounts[key] / (totalTasks || 1);
      if (percent < 0.2 || percent > 0.3) {
        balanced = false;
      }
    }
    if (balanced) {
      dominantCategory = "Balanced";
    } else if (maxCount / (totalTasks || 1) < 0.5) {
      dominantCategory = "Balanced"; // not dominant enough
    }
  
    // Use matrix to get archetype
    const key = loadLabel + ", " + completionLabel;
  
    const archetypeMatrix = {
      "High load, high completion": {
        Work: "The Achiever",
        Learning: "The Scholar",
        Relationships: "The Empath",
        Self: "The Zen Master",
        Balanced: "The Alchemist",
      },
      "Low load, high completion": {
        Work: "The Sniper",
        Learning: "The Sniper",
        Relationships: "The Connector",
        Self: "The Self-Curator",
        Balanced: "The Wanderer",
      },
      "High load, low completion": {
        Work: "The Dreamer",
        Learning: "The Crammer",
        Relationships: "The Juggler",
        Self: "The Inner Fire",
        Balanced: "The Dabbler",
      },
      "Low load, low completion": {
        Work: "The Wanderer",
        Learning: "The Wanderer",
        Relationships: "The Wanderer",
        Self: "The Wanderer",
        Balanced: "The Wanderer",
      },
    };
  
    let result = "The Wanderer"; // default
    if (archetypeMatrix[key] && archetypeMatrix[key][dominantCategory]) {
      result = archetypeMatrix[key][dominantCategory];
    }
  
    return (
      <div className="archetype-display">
        <h2>{result}</h2>
      </div>
    );
  }