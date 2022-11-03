type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

let calabresa: Pizza = {
    flavor: "Calabresa",
    slices: 8,
}

let marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6,
}

let nutela: Pizza = {
  flavor: "nutela",
  slices: 4,
}

type comum = "Calabresa" | "Frango" | "Pepperoni";
type vegetariana = "Marguerita" | "Palmito" | "Cogumelo";
type doce = "Nutela" | "Goiabada com Queijo" | "Marshmallow";