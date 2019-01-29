$().ready(function() {
            // $("#add_address").hide();
            // $("#expire_date").hide();
            // $(".dalivery_date_alert").hide()
            var car_type = $("#Insurance_car_type").val();
            if (car_type != '') {
                $("#car_model_hidden_fields").hide();
                if (car_type == 1 || car_type == 2) {
                    $("#car_model_hidden_fields").show();
                }
                $("#hidden_fields").show();
            }
            $('select').each(function() {
                if ($("#Insurance_existing").val() == 1) {
                    $(".ccTonCap").hide();
                    $(".pass_seat").hide();
                    updateCCValue();
                } else {
                    $(this).css("color", "gray");
                }
            });
            if ($("#errorPage").val() == 1) {
                $('#page-one').hide();
                $('#page-two').hide();
                $('#page-three').show();
            }
        });
        $("#Quotation").click(function(event) {
            $(".custom_flsh_message").hide();
            $(".my_tooltip_close").click();
            if ($('#page-one').is(':visible')) {
                validateFormOne()
            }
            return false;
        });
        // $("#Continue").click(function(event) {
        //     if ($('#page-two').is(':visible')) {
        //         $('#page-two').fadeOut(function() {
        //             $('#page-three').fadeIn(function() {
        //                 $('html, body').animate({
        //                     scrollTop: ($('#page-three').offset().top)
        //                 });
        //             });
        //         });
        //     }
        //     return false;
        // });
        // $("#submit").click(function(event) {
        //     $("#add_address").hide();
        //     if ($("#CustomerAddress").val() == '') {
        //         $("#CustomerAddress").css("color", "red");
        //         $("#CustomerAddress").focus();
        //         $("#add_address").show();
        //         return false;
        //     }
        //     if ($('#InsuranceCertificate').get(0).files.length === 0) {
        //         $('.upload_btn').css("border", "2px solid red");
        //         return false;
        //     }
        //     $("#Insurance").submit(function() {
        //         $("#imgSpinner1").show();
        //         $("#submit").hide();
        //         $("#img_uploader").hide();
        //     });
        // });
        // $('#InsuranceCertificate').click(function() {
        //     $('.upload_btn').css("border", "none");
        // });
        // $("#bill_back_btn_arw").click(function(event) {
        //     if ($('#page-two').is(':visible')) {
        //         $('#page-two').fadeOut();
        //         $('#page-one').fadeIn();
        //         $('html, body').animate({
        //             scrollTop: ($('#page-one').offset().top)
        //         }, 500);
        //     }
        //     return false;
        // });
        // $("#delivery_back_btn_arw").click(function(event) {
        //     if ($('#page-three').is(':visible')) {
        //         $('#page-three').fadeOut();
        //         $('#page-two').fadeIn();
        //         $('html, body').animate({
        //             scrollTop: ($('#page-two').offset().top)
        //         }, 500);
        //     }
        //     return false;
        // });
        $("#Insurance_car_reg_type").change(function() {
            updateCCValue()
        });
        $("#Insurance_car_type").change(function() {
            if ($(this).val() != '') {
                $("#car_model_hidden_fields").hide();
                if ($(this).val() == 1 || $(this).val() == 2) {
                    $("#car_model_hidden_fields").show();
                }
                $("#hidden_fields").show();
                $("#Insurance_car_reg_type").val("");
            }
            $(".ccTonCap").hide();
            $(".pass_seat").hide();
        });

        function setfilename(val) {
            var fileName = val.substr(val.lastIndexOf("\\") + 1, val.length);
            $("#fileName").html(fileName);
        }

        function updateCCValue() {
            var car_type = $("#Insurance_car_type").val();
            var private_car = '1';
            var micro_bus = '2';
            var motor_cycle = '5';
            var pickup_ban = '4';
            var cng = '3';
            var private_vehicle = '1';
            $(".pass_seat").show();
            if (car_type == private_car || car_type == micro_bus || car_type == motor_cycle) {
                $("#ccc").show();
            } else if (car_type == pickup_ban) {
                $("#ttc").show();
                $(".passenger_seat").hide();
                $("#pset4").show();
            } else if (car_type == cng) {
                $(".ccTonCap").hide();
                $(".pass_seat").hide();
            }
            var cc_capacity = $("#Insurance_cc_capacity");
            cc_capacity.find('option[value!=""]').hide();
            if (car_type == motor_cycle) {
                $(".pass_seat").hide();
                $("#passenger_number").val(2);
                cc_capacity.find('option[value="100"]').show();
                cc_capacity.find('option[value="130"]').show();
                cc_capacity.find('option[value="160"]').show();
            } else if (car_type == cng) {
                $(".pass_seat").hide();
                $("#passenger_number").val(3);
            } else if (car_type == private_car || car_type == micro_bus) {
                $(".passenger_seat").hide();
                (car_type == private_car) ? $("#pset7").show(): $("#pset12").show()
                if ($("#Insurance_car_reg_type").val() == private_vehicle) {
                    cc_capacity.find('option[value="150"]').show();
                    cc_capacity.find('option[value="250"]').show();
                } else {
                    cc_capacity.find('option[value="344"]').show();
                    cc_capacity.find('option[value="344.0"]').show();
                }
                cc_capacity.find('option[value="350"]').show();
                cc_capacity.find('option[value="450"]').show();
            }
        }
        $("#Insurance_get_certificate").on("change", function() {
            var delivery = $(this).val();
            $("#expire_date").hide();
            var dateonly = ''
            if (delivery == '1' || delivery == '2') {
                $(".certificate").html("Get Delivery");
                $.post("/index.php/motorinsurance/dalivey-date/", {
                    deliveryType: delivery
                }, function(data) {
                    var dateObj = jQuery.parseJSON(data);
                    $("#certificate_renew_date").val(dateObj.date_time);
                    $(".renew_date").html(dateObj.date_only);
                    $("#Ddate").html(dateObj.date_only);
                }).done(function(data) {
                    $(".my_tooltip_open").click();
                })
            } else if (delivery == '3') {
                $("#expire_date").show();
                $("#form_datetimepicker").click();
            }
            $("#certificateProcessingFee").html($(this).val());
            $("#certificateProcessingFeeVal").val($(this).val());
        })
        $("#Insurance_cc_capacity").on("change", function() {
            $("#cctonInsuredFee").html($(this).val());
            $("#cctonInsuredFeeVal").val($(this).val());
        })
        $("#Insurance_ton_capacity").on("change", function() {
            $("#totInsuredAmoutn").html($(this).val());
            $("#cctonInsuredFeeVal").val($(this).val());
        })
        $('input').blur(function() {
            $(this).css("color", "#111");
            $(this).css("font-weight", "700");
        });
        $('select').change(function() {
            $(this).css("color", "#111");
            $(this).css("font-weight", "700");
        });
        $('select').click(function() {
            $(this).css("color", "#111");
            $(this).find("option:first-child").attr('disabled', true);
        });
        $('select').change(function() {
            if ($(this).children('option:first-child').is(':selected')) {
                $(this).addClass('placeholder');
            } else {
                $(this).removeClass('placeholder');
                $(this).find("option:first-child").attr('disabled', true);
            }
        });
        $('#passenger_number4').on("spinstop", function() {
            var passengerNo = $(this).spinner('value');
            $("#passenger_fee").val(Number('45' * passengerNo));
        });
        $("#form_datetimepicker").datepicker({
            altField: ".certificate",
            altFormat: "yy-mm-dd",
            dateFormat: "yy-mm-dd",
            onSelect: function(date) {
                $(".certificate").html(date);
                $("#certificate_renew_date").val(date);
                $(".renew_date").html(date);
            }
        });

        function validateFormOne() {
            if ($("#customer_name").val() == '') {
                $("#customer_name").css("color", "red");
                $("#customer_name").focus();
                return false;
            }
            if ($("#customer_mobile").val() == '') {
                $("#customer_mobile").css("color", "red");
                $("#customer_mobile").focus();
                return false;
            }
            var Insurance_car_type = $("#Insurance_car_type").val();
            if (Insurance_car_type == '') {
                $("#Insurance_car_type").css("color", "red");
                $("#Insurance_car_type").focus();
                return false;
            } else if (Insurance_car_type == 1 || Insurance_car_type == 2) {
                if ($("#Insurance_car_model").val() == '') {
                    $("#Insurance_car_model").css("color", "red");
                    $("#Insurance_car_model").focus();
                    return false;
                }
                if ($("#Insurance_cc_capacity").val() == '') {
                    $("#Insurance_cc_capacity").css("color", "red");
                    $("#Insurance_cc_capacity").focus();
                    return false;
                }
            } else if (Insurance_car_type == 4) {
                if ($("#Insurance_ton_capacity").val() == '') {
                    $("#Insurance_ton_capacity").css("color", "red");
                    $("#Insurance_ton_capacity").focus();
                    return false;
                }
            }
            if ($("#Insurance_insurance_coverage").val() == '') {
                $("#Insurance_insurance_coverage").css("color", "red");
                $("#Insurance_insurance_coverage").focus();
                return false;
            }
            if ($("#Insurance_car_reg_type").val() == '') {
                $("#Insurance_car_reg_type").css("color", "red");
                $("#Insurance_car_reg_type").focus();
                return false;
            }
            if (Insurance_car_type == '4') {
                if ($("#Insurance_passenger_number4").val() == '') {
                    $("#Insurance_passenger_number4").css("color", "red");
                    $("#Insurance_passenger_number4").focus();
                    return false;
                }
            } else if (Insurance_car_type == '2') {
                if ($("#Insurance_passenger_number12").val() == '') {
                    $("#Insurance_passenger_number12").css("color", "red");
                    $("#Insurance_passenger_number12").focus();
                    return false;
                }
            } else if (Insurance_car_type == '1') {
                if ($("#Insurance_passenger_number7").val() == '') {
                    $("#Insurance_passenger_number7").css("color", "red");
                    $("#Insurance_passenger_number7").focus();
                    return false;
                }
            }
            if ($("#Insurance_get_certificate").val() == '') {
                $("#Insurance_get_certificate").css("color", "red");
                $("#Insurance_get_certificate").focus();
                return false;
            }
            return putSummary();
        }

        function putSummary() {
            var car_type = $("#Insurance_car_type").val();
            var capacity
            var capacityVal
            var passenger_fee = $("#passenger_fee").val();
            var passenger_no
            var driver_insurance_fee = 30;
            var carType = $('#Insurance_car_type option:selected').text();
            capacity = $('#Insurance_cc_capacity option:selected').text();
            capacityVal = $('#Insurance_cc_capacity').val();
            if ((car_type == '1')) {
                passenger_no = $("#Insurance_passenger_number7").val();
            } else if (car_type == '2') {
                passenger_no = $("#Insurance_passenger_number12").val();
            } else if (car_type == '4') {
                capacity = $('#Insurance_ton_capacity option:selected').text();
                capacityVal = $('#Insurance_ton_capacity').val();
                passenger_no = $("#Insurance_passenger_number4").val();
            } else if (car_type == '3') {
                capacity = 'Up to 350 CC';
                if ($("#Insurance_car_reg_type").val() == '1') {
                    capacityVal = '150';
                } else {
                    capacityVal = '244';
                }
                passenger_no = 3;
            } else {
                passenger_no = 1;
                driver_insurance_fee = 50;
            }
            var get_car_model = $("#Insurance_car_model").val();
            var get_certificate = $("#Insurance_get_certificate").val();
            var deliveryFee
            var deliveryFeeType
            if (get_certificate == '1') {
                deliveryFee = '100'
                deliveryFeeType = 'Within 4 Hours'
            } else if (get_certificate == '2') {
                deliveryFee = '0'
                deliveryFeeType = 'Within 24 Hours'
            } else {
                deliveryFee = '0'
                deliveryFeeType = 'Before insurance expired'
            }
            var total = Number(capacityVal, 2) + Number(passenger_fee * passenger_no, 2) + Number(driver_insurance_fee, 2);
            var vat = Number((15 * total / 100), 2);
            var deliveryTot = Number(deliveryFee, 2);
            var net_tot = Number((vat + total + deliveryTot), 2);
            $(".name").html($("#customer_name").val());
            $(".car_type_content").html(carType + " - " + capacity);
            $(".car_type_price").html(capacityVal);
            $(".passenger_price").html(Number(passenger_fee * passenger_no, 2));
            $(".driver_price").html(driver_insurance_fee);
            $(".tot_price").html(Number(total), 2);
            $(".vat_price").html(vat);
            $(".ins_with_vat").html(Number(vat + total), 2);
            $(".total").html(net_tot);
            $(".total_price").html("<h1><span>Total bill:</span><br> <strong>৳</strong>" + net_tot + "</h1>");
            deliveryFee = (deliveryTot == 0) ? "Free" : "৳ " + deliveryTot;
            $(".delivery_fee_price").html(deliveryFee);
            $.post("/index.php/motorinsurance/save-insurance-info/", {
                id: $("#Insurance_id").val(),
                name: $("#customer_name").val(),
                mobile: $("#customer_mobile").val(),
                car_type: $("#Insurance_car_type").val(),
                car_model: get_car_model,
                cc_capacity: ($("#Insurance_cc_capacity").val() != '') ? parseInt($("#Insurance_cc_capacity").val()) : 0,
                ton_capacity: $("#Insurance_ton_capacity").val(),
                insurance_coverage: $("#Insurance_insurance_coverage").val(),
                car_reg_type: $("#Insurance_car_reg_type").val(),
                passenger_number: passenger_no,
                get_certificate: $("#Insurance_get_certificate").val(),
                certificate_renew_date: $("#certificate_renew_date").val(),
                driver_insurance_fee: driver_insurance_fee,
                passenger_fee: passenger_fee,
                vat_total: vat,
                del_fee: deliveryTot,
                net_total: net_tot
            }, function(data) {}).done(function(data) {
                if (parseInt(data) > 0) {
                    $("#Insurance_id").val(data);
                    $('#page-one').fadeOut(function() {
                        $('#page-two').fadeIn(function() {
                            $('html, body').animate({
                                scrollTop: ($('#page-two').offset().top)
                            });
                        });
                    });
                } else {
                    return false;
                }
            });
        }
        // $('.popover-link').each(function() {
        //     $(this).popover({
        //         html: true,
        //         trigger: 'manual'
        //     }).click(function(e) {
        //         $(this).popover('toggle');
        //         $('.close').remove();
        //         $('.popover-title').append('<button type="button" class="close">&times;</button>');
        //         $('.close').click(function(e) {
        //             $(this).parents('.popover').remove();
        //         });
        //     });
        // });
        // $("#Customer_city1").change(function() {
        //     var city = $(this).val();
        //     var url = "/index.php/areas/area/?city_id=" + city;
        //     $.getJSON(url, null, function(data) {
        //         $("#Customer_area option").remove();
        //         $("#Customer_area").append($('<option value="">Select Area</option>'));
        //         $.each(data, function(index, item) {
        //             $("#Customer_area").append($("<option></option>").text(item).val(index));
        //         });
        //     });
        // });
        // $("#Customer_city").change(function() {
        //     var city = $(this).val();
        //     var _method = 'GET';
        //     var _url = "/index.php/areas/area/?city_id=" + city;
        //     var _queryStr = {
        //         city_id: city
        //     };
        //     $.ajax({
        //         type: _method,
        //         url: _url,
        //         success: function(msg) {
        //             $("#Customer_area").html(msg);
        //         },
        //         error: function(jqxr) {}
        //     });
        // });

        function checkKey(event) {
            var _key = (window.Event) ? event.which : event.keyCode;
            if ((_key >= 48 && _key <= 57) || _key == 8 || _key == 9) {
                return true;
            } else {
                return false
            }
        }