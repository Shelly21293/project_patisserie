# Generated by Django 4.0.6 on 2022-10-31 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0019_alter_order_total_alter_orderdetail_amount_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetail',
            name='total',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=4),
        ),
    ]
