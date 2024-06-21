using System;

namespace FB
{

	public class FizzyBuzzy
    {	
	
	public string FizzBuzz(int x)
	{
	    if(x % 3 == 0 && x % 5 == 0)
		{
			return "fizzbuzz";
		}

	    if(x % 5 == 0)
		{
			return "buzz";
		}

	    if(x % 3 == 0)
		{
			return "fizz";	
		}
                return $"{x} isn't divisible by 3 or 5";
         	 		
	}

    }			
}