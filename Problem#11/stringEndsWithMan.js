function superheroes(heroes) {
  return heroes
    .filter(
      (name) =>
        !(name.endsWith("Woman") || name.endsWith("woman")) &&
        name.endsWith("man")
    )
    .sort();
}

//Time to Solve: 24Min
