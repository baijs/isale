drop table if exists GOODS;

drop table if exists ISALE_ORDER;

drop table if exists LOGISTICS;

drop table if exists MEMBER;

/*==============================================================*/
/* Table: GOODS                                                 */
/*==============================================================*/
create table GOODS
(
   ID                   int not null comment '��ƷID',
   NAME                 varchar(50) not null comment '��Ʒ����',
   PRICE                float(10,2) not null comment '��Ʒ����',
   CREATE_TIME          datetime comment '����ʱ��',
   UPDATE_TIME          datetime comment '�޸�ʱ��',
   primary key (ID)
);

alter table GOODS comment '��Ʒ';

/*==============================================================*/
/* Table: ISALE_ORDER                                           */
/*==============================================================*/
create table ISALE_ORDER
(
   ID                   int not null,
   ORDER_ID             char(18) not null comment '������ţ�YYYYMMDDHHmmssXXXX',
   GOOD_ID              int not null,
   MEMB_ID              int comment '��ԱID',
   LOGISTIC_ID          int comment '������ϢID',
   PAY_TIME             datetime comment '֧��ʱ��',
   NUM                  int comment '��������',
   PAY_SUM              float(10,2) comment '֧�����',
   PAY_WAY              char comment '֧����ʽ
            1��֧����
            2��΢��',
   ORDER_STATE          char comment '����״̬
            0��δ����
            1���ѷ���
            2���˻�',
   REMARK               varchar(100) comment '��ע',
   CREATE_TIME          datetime comment '����ʱ��',
   UPDATE_TIME          datetime comment '�޸�ʱ��',
   primary key (ID)
);

alter table ISALE_ORDER comment '������';

/*==============================================================*/
/* Table: LOGISTICS                                             */
/*==============================================================*/
create table LOGISTICS
(
   ID                   int,
   CODE                 varchar(20) comment '��������',
   CREATE_TIME          datetime,
   UPDATE_TIME          datetime
);

alter table LOGISTICS comment '������Ϣ';

/*==============================================================*/
/* Table: MEMBER                                                */
/*==============================================================*/
create table MEMBER
(
   ID                   int not null,
   TEL                  char(11),
   EMAIL                varchar(50),
   ADDRESS              varchar(100),
   CREATE_TIME          datetime,
   UPDATE_TIME          datetime,
   primary key (ID)
);

alter table MEMBER comment '��Ա��Ϣ��';
