PGDMP         2                {            postgres    12.12    12.12                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    13318    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Mexico.1252' LC_CTYPE = 'Spanish_Mexico.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2826            �            1259    32888    vacantes    TABLE     B  CREATE TABLE public.vacantes (
    id text NOT NULL,
    puesto character varying(100),
    descripcion text,
    cualidades text,
    experiencia text,
    caracteristicas text,
    datos text,
    estudios text,
    conocimientos text,
    disponibles integer,
    ciudad character varying(4),
    administrador text
);
    DROP TABLE public.vacantes;
       public         heap    postgres    false                      0    32888    vacantes 
   TABLE DATA           �   COPY public.vacantes (id, puesto, descripcion, cualidades, experiencia, caracteristicas, datos, estudios, conocimientos, disponibles, ciudad, administrador) FROM stdin;
    public          postgres    false    204   @          �  x��VMo�F=ӿb~��ZV���D	�b *Ѓ/��\e�K�.��&�r(z�U�o��k$vH�Kq>޼y3�i[��'��L]�v��/~ѵ�%�⥎�xǁGM`Gn�w���J���qő�K��t�k�l��gX�>tL��!�O�n�F%�9'����(i�k�bb�L�,&����:�i��8���^M� �HN+M�՘��Hj�lB�,���m$A�
uQ|iU�: ^����F��&'���"�cVx����>$�p:��EF�	*�k�Ŕx��'�;Oz�� ~�
��n�W�Ȱq��ՠ�|�(S�aa9�H�K�<רt���C�B8%�,��eJc�$��X�_l{�t#�~���[�*���X�-��A��5� G �����W��hi�>��h��=���:W8�U����Me��56���*WL[^�߆�������j�4i��'�Ss�x{6M}Eg�φ���*D��oY�lm��Ȓ��$uQD�1q������c�?[�U�J-�����v��Ѩl��5IZ޷��Vܕf�xX����a�.X����7Z�ZR��rक��7�Q��#�� P��v�DJ�a���F�^RF�{i�t) �
�G����݄C�j#�FX�uR�(+/:J���b+�bb�K\}�̷�z�X��;�����0��qH[�@�e9�Ir�:Gז1� O�
%7���{d�H���h)
���	�Cs���ǭ�
#���(��}��6C�����t�쵯�g�!-���-1����l�����'�m����k*�^
_��
Uu���@Ӟ��kg��uW]-ڮ)��l����� �z������A�W"�«���}w }�+�A����-����O�ţ���݈����'GGG� �x�u     