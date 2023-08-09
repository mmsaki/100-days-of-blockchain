# ECDSA

## Secp256k1 Curve

1. Run

   ```sh
   python sepc256k1_curve.py
   ```

1. Python implementationt to check for points on the Secp256k1 Curve

   ```py
   def is_on_secp256k1_curve(n):
       """
       Returns true is tuple of integers `n` is a point on the eliptic curve y^2 = x^3 = 7
       """
       # secp256k1 params
       p = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
       b = 7

       # convert coordinates to integers
       x, y = n
       x = int(x)
       y = int(y)

       # calculate y^2 (mod p)
       y_squared = pow(y, 2, p)

       # calculate x^3 + 7 (mod p)
       x_cubed_plus_7 = (pow(x, 3, p) + b) % p

       print("x^3 + 7 ==", x_cubed_plus_7)
       print("y^2     ==", y_squared)

       #check if y^2 = x^3 + 7 (mod p)
       return (y_squared == x_cubed_plus_7)
   ```
