
val df = spark.read.format("csv").option("header", "true").load("fifa18.csv");

df.createOrReplaceTempView("jogadores");

val sqlResult = spark.sql("SELECT ID, name, club, club_logo, age, flag, nationality, photo,   league, CAST(eur_value as int), CAST(eur_release_clause as int), CAST(overall as int), CAST(potential as int)  FROM jogadores Order by overall Desc, eur_value Desc LIMIT 80");

sqlResult.write.json("fifa18_limit.json");

//System.exit(0);
