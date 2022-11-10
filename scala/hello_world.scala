// Example taken from https://docs.scala-lang.org/scala3/book/taste-hello-world.html 

import scala.io.StdIn.readLine

@main def helloInteractive() =
  println("Please enter your name:")
  val name = readLine()

  println("Hello, " + name + "!")