# Generated by Django 4.0.6 on 2022-08-16 14:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_order_orderdetail_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='orderDetail_id',
        ),
        migrations.AddField(
            model_name='orderdetail',
            name='order_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.order'),
        ),
        migrations.AlterField(
            model_name='orderdetail',
            name='quantity',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=4),
        ),
    ]
