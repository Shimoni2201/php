<?php
echo "hello world <br>"; 
$s="pizza";
echo " i like " . $s . "<br>" ;

$x = 5; // global scope


echo "<p>Variable x outside function is: $x</p>";

function myTest1() {
    $i = 5; // local scope
    echo "<p>Variable x inside function is: $i</p>";
  }
  myTest1();
$cars = array("volvo","toyota", "BMW", "AUDI") ;
$int = 70;
$float = 70.98;

var_dump($cars) ;
var_dump($int) ;
var_dump($float) ;
echo "<br>";
echo strlen("Hello world!"); //letter count
echo "<br>";
echo str_word_count("Hello world!"); //word count
echo "<br>";
echo strrev("Hello world!"); // rev string
echo "<br>";
echo strpos("Hello world!", "world"); //find word
echo "<br>";
echo str_replace("world", "Dolly", "Hello world!"); //replace string
echo "<br>";
class book{
  public $title ;
  public $author;
  public $price;
  public function __construct($title, $author, $price){
    $this->title = $title;
    $this->author = $author;
    $this->price = $price;
  }
  public function message(){
    return "I have ". $this->title . " book and the author is " . $this->author . "with price of " . $this->price . ".";
  }
}
$mybook = new Book("Millionair Minds", "T. Harv ", "500");
echo $mybook -> message();
echo "<br>";
echo(rand());
echo "<br>";
echo(rand(10,100));
echo "<br>";
$a=100;
$b=50;
echo "addition of 100 and 50 = ",$a + $b, "<br>";
echo "subtraction of 100 and 50 = ",$a - $b, "<br>";
echo "multiplication of 100 and 50 = ",$a * $b, "<br>";
echo "division of 100 and 50 = ",$a / $b, "<br>";
echo "modulas of 100 and 50 = ",$a % $b, "<br>";
echo "exponentiation of 100 and 50 = ",$a ** $b, "<br>";
$t= rand(-100,100);
if ($t<0){
  echo "negative integer ",$t;
}
elseif($t>0){
  echo "positive integer ",$t;
}
else{
  echo "whole number ",$t;
}
echo "<br>";
echo "using switch <br>";
$day = 4;

switch ($day) {
  case 1:
    echo "monday";
    break;
  case 2:
    echo "tuesday";
    break;
  case 3:
    echo "wednesday";
    break;
  case 4:
    echo "thursday";
    break;
  case "3":
    echo "friday";
    break;
  case "3":
      echo "saturday";
      break;
  case "3":
      echo "sunday";
      break;    
  default:
    echo "invalid";
}
echo "<br>";
print "using while loop <br>";

$num = 0;

while($num <= 100) {
  echo "The number is: $num <br>";
  $num+=10;
}
echo "<br> using do while loop <br>";
$d = 1;

do {
  echo "The number is: $d <br>";
  $d++;
} while ($d <= 5);

echo "<br> using for loop <br> ";
for ($e = -10; $e <= -5; $e+=1) {
  echo "The number is: $e <br>";
}
echo "<br> for each loop <br>";
$colors = array("red" =>"0", "green" =>"1", "blue" =>"2", "yellow" =>"3");

foreach ($colors as $f => $value) {
  echo "$f = $value <br>";
}
echo "<br> continue.. <br>";
for ($g = 0; $g < 10; $g++) {
  if ($g == 4) {
    continue;
  }
  echo "The number is: $g <br>";
}
echo "<br> addition of 2-d array <br>";
$h=array(array(6,2),array(11,3));
$i=array(array(5,3),array(4,3));
for($m=0;$m<2;$m++){
    for($n=0;$n<2;$n++){
        echo $h[$m][$n]+$i[$m][$n]." ";
      }
      echo "<br>";
    }


?>
