use strict;
use warnings;

package MapTestClass;

sub new
{
    my $class = shift;
    my $self = {};
    bless $self, $class;
    return $self;
}

sub mapTest {
    my ( $self ) = @_;
    my $map_obj = {
      x => 5,
    };
    #let containsX = "x" in mapObj;
    #delete mapObj["x"];
    ${$map_obj}{"x"} = 3;
    return ${$map_obj}{"x"};
}

package Program;
my $c = new TestClass();
$c->testMethod();