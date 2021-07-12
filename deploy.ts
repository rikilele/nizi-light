// Copyright 2021 Riki Singh Khorana. All rights reserved. MIT license.

import { Kyuko } from "https://deno.land/x/kyuko@v0.4.1/mod.ts";

const app = new Kyuko();

app.default((_, res) => {
  res.redirect("https://rikilele.github.io/nizi-light");
});

app.listen();
