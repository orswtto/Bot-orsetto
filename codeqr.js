importa  java.awt.image.BufferedImage ;
importare  java.io.File ;
import  java.util.List ;
importa  javax.imageio.ImageIO ;
importa  io.nayuki.qrcodegen.* ;

// Operazione semplice 
QrCode qr0 =  QrCode . encodeText( " Ciao mondo! " , QrCode . Ecc . MEDIUM );
 BufferedImage img = toImage(qr0, 4 , 10 );   // Vedi QrCodeGeneratorDemo 
ImageIO . write(img, " png " , nuovo  File ( " qr-code.png " ));

// Elenco operazioni manuali 
< QrSegment > segs =  QrSegment . makeSegments( " 3141592653589793238462643383 " );
 QrCode qr1 =  QrCode . encodeSegments(segs, QrCode . Ecc . HIGH , 5 , 5 , 2 , false );
 for ( int y =  0 ; y < qr1 . dimensione; y ++ ) {
     for (int ) {x =  0 ; x < qr1 . dimensione; x ++
        ( ... paint qr1 . getModule(x, y) ... )
    }
}
