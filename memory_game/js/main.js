v a r   c a r d s   =   [  
   {  
       r a n k :   " q u e e n " ,  
       s u i t :   " h e a r t s " ,  
       c a r d I m a g e :   " i m a g e s / q u e e n - o f - h e a r t s . p n g "  
   } ,  
   {  
       r a n k :   " q u e e n " ,  
       s u i t :   " d i a m o n d s " ,  
       c a r d I m a g e :   " i m a g e s / q u e e n - o f - d i a m o n d s . p n g "  
   } ,  
   {  
       r a n k :   " k i n g " ,  
       s u i t :   " h e a r t s " ,  
       c a r d I m a g e :   " i m a g e s / k i n g - o f - h e a r t s . p n g "  
   } ,  
   {  
       r a n k :   " k i n g " ,  
       s u i t :   " d i a m o n d s " ,  
       c a r d I m a g e :   " i m a g e s / k i n g - o f - d i a m o n d s . p n g "  
   }  
 ] ;  
  
 v a r   a m l a k   =   d o c u m e n t . g e t E l e m e n t s B y T a g N a m e ( " d i v " ) ;  
 c o n s o l e . l o g ( a m l a k )  
 / /   / / a r r a y   w i t h   c a r d s   t h a t   a r e   i n   p l a y  
 / /   v a r   c a r d s I n P l a y   =   [ ] ;  
 / /  
 / /   / / f u n c t i o n   t o   s t o r e   t h e   s t e p s   t o   c h e c k   f o r   a   m a t c h .  
 / /   v a r   c h e c k F o r M a t c h   =   f u n c t i o n   ( )   {  
 / /     i f   ( c a r d s I n P l a y . l e n g t h   = = =   2 )   {  
 / /         i f   ( c a r d s I n P l a y [ 0 ]   = = =   c a r d s I n P l a y [ 1 ] )   {  
 / /             a l e r t ( " Y o u   f o u n d   a   m a t c h ! " ) ;  
 / /             }   e l s e   {  
 / /             a l e r t ( " S o r r y ,   t r y   a g a i n . " ) ;  
 / /             }  
 / /     } ;  
 / /   } ;  
 / /  
 / /  
 / /   / / f u n c t i o n   t o   s t o r e   a l l   s t e p s   t h a t   s h o u l d   h a p p e n   w h e n   t h e   u s e r   f l i p s   a   c a r d .  
 / /   v a r   f l i p C a r d   =   f u n c t i o n   ( )   {  
 / /     v a r   c a r d I d   =   t h i s . g e t A t t r i b u t e ( ' d a t a - i d ' ) ;  
 / /     t h i s . s e t A t t r i b u t e ( ' s r c ' ,   c a r d s [ c a r d I d ] . c a r d I m a g e ) ;  
 / /  
 / /     / / p u s h   t h e   c a r d s   t h a t   t h e   u s e r   f l i p p e d   t o   t h e   c a r d s I n P l a y   a r r a y  
 / /     c a r d s I n P l a y . p u s h ( c a r d s [ c a r d I d ] . r a n k )  
 / /  
 / /     / / t e s t   t o   s e e   i f   t h e   c o d e   i s   r u n  
 / /     c o n s o l e . l o g ( " U s e r   f l i p p e d   "   +   c a r d s [ c a r d I d ] . r a n k )  
 / /     c o n s o l e . l o g ( c a r d s [ c a r d I d ] . c a r d I m a g e )  
 / /     c o n s o l e . l o g ( c a r d s [ c a r d I d ] . s u i t )  
 / /  
 / /     / / c a l l   t h e   f u n c t i o n   t o   c h e c k   f o r   a   m a t c h  
 / /     c h e c k F o r M a t c h   ( ) ;  
 / /   } ;  
 / /  
 / /   / / f u n c t i o n   n e w   g a m e   b o a r d  
 / /   v a r   c r e a t e B o a r d   =   f u n c t i o n   ( )   {  
 / /   f o r   ( v a r   i   =   0 ;   i   <   c a r d s . l e n g t h ;   i + + ) {  
 / /     v a r   c a r d E l e m e n t   =   d o c u m e n t . c r e a t e E l e m e n t ( ' i m g ' ) ;  
 / /     c a r d E l e m e n t . s e t A t t r i b u t e ( ' s r c ' ,   ' i m a g e s / b a c k . p n g ' ) ;  
 / /     c a r d E l e m e n t . s e t A t t r i b u t e ( ' d a t a - i d ' ,   i ) ;  
 / /     c a r d E l e m e n t . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   f l i p C a r d ) ;  
 / /     d o c u m e n t . g e t E l e m e n t B y I d ( ' g a m e - b o a r d ' ) . a p p e n d C h i l d ( c a r d E l e m e n t ) ;  
 / /   }  
 / /   } ;  
 / /  
 / /   / / c a l l   t h e   f u n c t i o n   g a m e   b o a r d  
 / /   c r e a t e B o a r d ( ) ;  
 