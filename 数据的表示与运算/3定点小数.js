/*
  定点数：
    （1）定点整数，即带符号整数，（编码表示：原码，补码，反码，移码）
    （2）定点小数，（编码表示：原码，补码，反码）

  
  
    小数点隐藏在符号位后面

    原码、反码、补码比较（n+1bit）
    合法范围：
        定点小数：原码：-（1-2^-n）~ 1-2^-n
        定点小数：反码：-（1-2^-n）~ 1-2^-n
        定点小数：补码：-1 ~ 1-2^-n
        
    真值0的表示形式：
        定点小数：原码：[+0]原 = 0,0000000；[-0]原 = 1,0000000
        定点小数：反码：[+0]反 = 0,0000000；[-0]反 = 1,1111111
        定点小数：补码：[0]补 = 0,0000000，只有这一种形式

*/